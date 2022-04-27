var express = require("express");
var BusinessUserAddresses = require("../../models/business/BusinessUserAddresses");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;

  let businessuseraddresses = new BusinessUserAddresses.BusinessUserAddresses();
  businessuseraddresses.id = body.data.id;
  businessuseraddresses.userid = body.data.userid;
  businessuseraddresses.name = body.data.name;  
  businessuseraddresses.email = body.data.email;
  businessuseraddresses.mobileno = body.data.mobileno;
  businessuseraddresses.address1 = body.data.address1;
  businessuseraddresses.address2 = body.data.address2;
  businessuseraddresses.nearestspot = body.data.nearestspot;
  businessuseraddresses.city = body.data.city;
  businessuseraddresses.district = body.data.district;
  businessuseraddresses.state = body.data.state;
  businessuseraddresses.pincode = body.data.pincode;
  businessuseraddresses.addresstype = body.data.addresstype;

  businessuseraddresses.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let businessuseraddresses = new BusinessUserAddresses.BusinessUserAddresses();
  businessuseraddresses.userid = body.data.userid;
  businessuseraddresses.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let businessuseraddresses = new BusinessUserAddresses.BusinessUserAddresses();
  businessuseraddresses.userid = body.data.userid;
  businessuseraddresses.list().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  let businessuseraddresses = new BusinessUserAddresses.BusinessUserAddresses();
  businessuseraddresses.userid = body.data.userid;
  businessuseraddresses.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/changestatus", async (req, res) => {
  let body = req.body;
  let businessuseraddresses = new BusinessUserAddresses.BusinessUserAddresses();
  businessuseraddresses.userid = body.data.userid;
  businessuseraddresses.status = body.data.status;  
  businessuseraddresses.changestatus().then(result => {
      let data = {
          "status": "success",
          "data": result
      }
      res.end(JSON.stringify(data));
  },
      err => {
          let data = {
              "status": "failed"
          }
          res.end(JSON.stringify(data));
          console.log(err)
      });
});


module.exports = router;