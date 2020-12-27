import sys
sys.path.insert(0,'../src/modules')

from mikrotik.mikrotik import mkt

host = ""
user = ""
passwd = ""
interface = ""

host = mkt(host, user, passwd)
pppsrv = host.onlinePPP(interface)

print(pppsrv)