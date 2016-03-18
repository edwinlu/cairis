#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing,
#  software distributed under the License is distributed on an
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
#  specific language governing permissions and limitations
#  under the License.


#$URL$

import wx
import armid
import ARM
from Borg import Borg
from ReferenceContribution import ReferenceContribution
from UseCaseContributionPanel import UseCaseContributionPanel

class UseCaseContributionDialog(wx.Dialog):
  def __init__(self,parent,objt,rType):
    wx.Dialog.__init__(self,parent,-1,'Edit Use Case Contribution',style=wx.DEFAULT_DIALOG_STYLE|wx.MAXIMIZE_BOX,size=(475,300))
    self.theSource = objt.source()
    self.theDestination = objt.destination()
    self.theMeansEnd = objt.meansEnd()
    self.theContribution = objt.contribution()
    mainSizer = wx.BoxSizer(wx.VERTICAL)
    self.panel = UseCaseContributionPanel(self)
    mainSizer.Add(self.panel,1,wx.EXPAND)
    self.SetSizer(mainSizer)
    wx.EVT_BUTTON(self,armid.REFERENCECONTRIBUTION_BUTTONCOMMIT_ID,self.onCommit)

    if (objt.meansEnd() != ''):
      self.theCommitVerb = 'Create'
      self.SetLabel = 'Create Reference Contribution'
    else:
      self.theCommitVerb = 'Edit'
    self.panel.load(objt,rType)
   

  def onCommit(self,evt):
    charCtrl = self.FindWindowById(armid.REFERENCECONTRIBUTION_COMBOSOURCE_ID)
    refCtrl = self.FindWindowById(armid.REFERENCECONTRIBUTION_COMBODESTINATION_ID)
    meCtrl = self.FindWindowById(armid.REFERENCECONTRIBUTION_COMBOMEANSEND_ID)
    contCtrl = self.FindWindowById(armid.REFERENCECONTRIBUTION_COMBOCONTRIBUTION_ID)

    self.theSource = charCtrl.GetValue()
    self.theDestination = refCtrl.GetValue()
    self.theMeansEnd = meCtrl.GetValue()
    self.theContribution = contCtrl.GetValue()


    commitLabel = self.theCommitVerb + ' Use Case Contribution'

    if len(self.theSource) == 0:
      dlg = wx.MessageDialog(self,'Characteristic cannot be empty',commitLabel,wx.OK) 
      dlg.ShowModal()
      dlg.Destroy()
      return
    if len(self.theDestination) == 0:
      dlg = wx.MessageDialog(self,'Reference cannot be empty',commitLabel,wx.OK) 
      dlg.ShowModal()
      dlg.Destroy()
      return
    if len(self.theMeansEnd) == 0:
      dlg = wx.MessageDialog(self,'Means/End cannot be empty',commitLabel,wx.OK) 
      dlg.ShowModal()
      dlg.Destroy()
      return
    elif len(self.theContribution) == 0:
      dlg = wx.MessageDialog(self,'Contribution cannot be empty',commitLabel,wx.OK) 
      dlg.ShowModal()
      dlg.Destroy()
      return
    else:
      self.EndModal(armid.REFERENCECONTRIBUTION_BUTTONCOMMIT_ID)

  def parameters(self):
    parameters = ReferenceContribution(self.theSource,self.theDestination,self.theMeansEnd,self.theContribution)
    return parameters
