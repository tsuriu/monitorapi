import sys
sys.path.insert(0,'../src/modules')

from mikrotik.mikrotik import mkt

host = mkt('10.82.78.204','tulio','64eu.7!4eu#')
pppsrv = host.onlinePPP('ftth_arvores')

print(pppsrv)