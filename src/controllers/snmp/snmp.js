var snmp = require('net-snmp');

exports.module = function snmpSession(ip, snmpkey) {
  this.ip = ip;
  this.snmpkey = snmpkey;

  this.S = snmp.createSession(this.ip, this.snmpkey);
};

snmpSession.prototype.close = function() {
  this.S.close ();
};

snmpSession.prototype.snmpGet = function(oid) {
  this.S.get(oid, function(error, varbinds) {
    if (error) {
      console.error(error);
    } else {
      for(var i = 0; i < varbinds.lenght; i++)
        if (snmp.isVarbindError (varbinds[i])) {
          console.error(snmp.varbindError (varbinds[i]))
        } else {
          console.log(varbinds[i].oid + " = " + varbinds[i].value);
        }
    }
  });
};
