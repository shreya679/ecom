let Database = require("../Database");

class BusinessUserAddresses {

    id = 0;
    userid = 0;
    name = "";
    email = "";
    mobileno = "";
    address1 = "";
    address2 = "";
    nearestspot = "";
    city = "";
    district = "";
    state = "";
    pincode = "";
    status = "";
    addresstype = "";

    db = new Database.Database();

    constructor(){

        this.id = 0;
        this.userid = 0;
        this.name = "";
        this.email = "";
        this.mobileno = "";
        this.address1 = "";
        this.address2 = "";
        this.nearestspot = "";
        this.city = "";
        this.district = "";
        this.state = "";
        this.pincode = "";
        this.status = "";
        this.addresstype = "";
    }

    save = ()=>{
        if(this.userid == 0)
        {
            this.query = "INSERT INTO business_useraddresses( name,email,mobileno,address1,address2,nearestspot,city,district,state, pincode, status, addresstype)";
            this.query += "VALUES ('" + this.name + "', '" + this.email + "', " + this.mobileno + ", '" + this.address1 + "','" + this.address2 + "','" + this.nearestspot + "','" + this.city + "','" + this.district + "','" + this.state + "'," + this.pincode + ",'" + this.addresstype + "', 'open')";
        }
        else
        {
            this.query = "UPDATE business_useraddresses SET address1 = " + this.address1 +", ";
            this.query += "address2 = '" + this.address2 + "' ";
            this.query += "nearestspot = '" + this.nearestspot + "' ";
            this.query += "city = '" + this.city + "' ";
            
            this.query += "district = '" + this.district + "' ";
            this.query += "state = '" + this.state + "' ";
            this.query += "pincode = " + this.pincode + " ";
            this.query += "status = " + this.status + " ";
            this.query += "addresstype = " + this.addresstype + " ";
            this.query += "WHERE userid = " + this.userid;
        }
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    get = () =>{
        this.query = "SELECT * FROM business_useraddresses WHERE userid = " + this.userid;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });        
    }

    list = () =>{
        this.query = "SELECT * FROM business_useraddresses WHERE userid = " + this.userid + " ORDER BY name";
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
    
    delete = ()=>{
        this.query = "DELETE FROM business_useraddresses WHERE userid =" + this.userid;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    changestatus = ()=>{
        this.query = "UPDATE business_useraddresses SET status='" + this.status + "' WHERE userid = " + this.userid;
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) 
                {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
}

module.exports = {
    BusinessUserAddresses:BusinessUserAddresses
}