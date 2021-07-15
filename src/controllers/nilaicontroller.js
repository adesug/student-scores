const {nilai} = require('../models/');

module.exports = {

    getAllNilai : (req,res) => {
        nilai.findAll()

        .then((data)=> {
            res.status(200).send({
                msg : "get all nilai success",
                status: 200,
                data
            })
            console.log(data);
        })

        .catch((error) => {
            res.status(500).send({
                msg: "Get all data is error",
                status: 500,
                error
            })
        })
    },
    createNewNilai : (req,res)=> {
        const {body} = req;

        nilai.create(body)
        .then((data) => {
            res.status(200).send({
                msg : "create data success",
                status: 200,
                data
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "create data is error",
                status: 500,
                error
            })
        })
    },
    getNilaiId : (req,res) => {
        const id = req.params.id;
        nilai.findAll({
            where:{
                id
            }
        })
        .then((data) => {
            res.status(200).send({
                msg:"Get id Data Nilai is Success",
                status: 200,
                data
            })
        })
        .catch((error)=> {
            res.status(500).send({
                msg:"get data id is error",
                status: 500,
                error
            })
        })
    },
    updateNilai :  async (req,res) => {
        const {id} = req.params;
        const {body} = req

        let findnilai = await nilai.findOne({
            where: {
                id
            }
        });

        nilai.update (body,{
            where:{
                id
            }
        })

        .then((data) => {
            const resObject = {...findnilai.dataValues, ...body}

            res.status(200).send({
                msg:"update data nilai is success",
                status: 200,
                data : resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "update data is error",
                status: 500,
                error
            })
        })
    },
    deleteDataNilai : async (req,res) => {
        const {id} = req.params;

        let findnilai = await nilai.findOne({
            where: {
                id
            }
        });
        if(findnilai === null){
            res.status(404).send({
                msg: "update makanan is error",
                status: 404,
                error: "data is not found"
            })
        }

        nilai.destroy({
            where:({
                id
            })
        })
        .then((data) => {
            const resObject = {...findnilai.dataValues}

            res.status(200).send({
                msg : "Delete data students is success",
                status : 200,
                data : resObject
            })
        })
        .catch ((error) => {
            res.status(500).send({
                msg: "delete data is error",
                status: 500,
                error
            })

        })

    }
}