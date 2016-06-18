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

from Borg import Borg
import os
import logging
import DatabaseProxyFactory
from ARM import ARMException
from string import strip

def parseConfigFile():
  b = Borg()
  cfgFileName = ''
  try:
    cfgFileName = os.environ['CAIRIS_CFG']
  except KeyError:
    raise ARMException('CAIRIS_CFG environment variable has not been set.  Please set this to the correct location of your CAIRIS configuration file, e.g. export CAIRIS_CFG=/home/cairisuser/cairis.cnf') 

  if not os.path.exists(cfgFileName):
    raise ARMException('Unable to locate configuration file at the following location:' + cfgFileName)
  cfgDict = {}
  cfgFile = open(cfgFileName)
  for cfgLine in cfgFile.readlines():
    cfgTuple = cfgLine.split('=')
    if len(cfgTuple) != 2:
      pass
    else:
      cfgDict[strip(cfgTuple[0])] = strip(cfgTuple[1])
  cfgFile.close()
  return cfgDict

def initialiseCairisDbSettings(cfgDict):
  b = Borg()
  b.dbHost = cfgDict['dbhost']
  b.dbPort = int(cfgDict['dbport'])
  b.dbUser = cfgDict['dbuser']
  b.dbPasswd = cfgDict['dbpasswd']
  b.dbName = cfgDict['dbname']
  b.tmpDir = cfgDict['tmp_dir']
  b.cairisRoot = cfgDict['root']
  b.imageDir = os.path.abspath(cfgDict['default_image_dir'])


def setupDocBookConfig():
  b = Borg()
  b.docBookDir = 'http://www.docbook.org/sgml/4.5'
  if os.path.exists('/usr/share/sgml/docbook/dtd/4.5'):
    b.docBookDir = '/usr/share/sgml/docbook/dtd/4.5'
  else:
    b.logger.warning('Unable to find DocBook schemes. Check if DocBook is correctly installed.')

def initialiseDesktopSettings():
  b = Borg()
  pSettings = b.dbProxy.getProjectSettings()
  b.fontSize = pSettings['Font Size']
  b.apFontSize = pSettings['AP Font Size']
  b.fontName = pSettings['Font Name']
  b.mainFrame = None

def initialise():
  cfgDict = parseConfigFile()
  initialiseCairisDbSettings(cfgDict)

  b = Borg()
  b.logger = logging.getLogger('cairis_gui')
  b.imageDir = b.cairisRoot + '/images' 
  b.configDir = b.cairisRoot + '/config'
  setupDocBookConfig()

  b.dbProxy = DatabaseProxyFactory.build()
  initialiseDesktopSettings()
