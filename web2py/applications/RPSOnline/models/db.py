import datetime

db = DAL('sqlite://storage.sqlite')

#auth and added extra fields instead of profile db
from gluon.tools import *
auth = Auth(db)
auth.settings.extra_fields['auth_user']= [
    Field('username'),
    Field('pic', 'upload'),
    Field('RPS'),
    Field('body', 'text'),
    Field('created_on', 'datetime', default=request.now)]
auth.define_tables()
crud = Crud(db)

db.auth_user.username.requires = IS_NOT_IN_DB(db, 'auth_user.username')
db.auth_user.username.requires = IS_NOT_EMPTY()
db.auth_user.created_on.readable = db.auth_user.created_on.writable = False
db.auth_user.RPS.requires =  IS_IN_SET(["Rock", "Paper", "Scissors"])
