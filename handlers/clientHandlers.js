const { v4: uuidv4 } = require('uuid');
const { clients } = require('../data/clients');


// write your handlers here...

const getClients = (req, res) => {
    res.status(200).json({
        status: 200,
        data: clients
    });
}

const getClient = (req, res) => {

    let clientID = req.params.id; 

    console.log("client search started");

    let client = clients.find((client)=>{
        return  client.id == clientID ;
    });

    
    if(!client){
        res.status(400).json({
            status: 400,
            data: {"error" : "client not found"}
        });
    } else{
        res.status(200).json({
            status: 200,
            data: client
        });
    }

}
const addClient = (req, res) => {

    let newClient = req.body; 



    let clientExists = clients.find((client)=>{
        return  client.email == newClient.email ;
    });


    
    if(!clientExists){


        newClient.id = uuidv4();
        
        console.log(newClient);
        clients.push(newClient);
        res.status(200).json({
            status: 200,
            data: {"success" : "client has been added"}
        });


    } else{
        res.status(400).json({
            status: 400,
            data: {"error" : "client already exits"}
        });

    }

}

module.exports = {getClients , getClient, addClient};

