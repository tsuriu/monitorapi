import os
from flask import Flask
from flask_restful import Api
from resources.mikrotik import ResourceMikrotik_PPPCnt


app = Flask(__name__)
api = Api(app)

api.add_resource(ResourceMikrotik_PPPCnt, '/cntpppoe')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)