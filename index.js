const express = require('express')
const bodyParser = require('body-parser')

// 9. import model
const {Animal: AnimalModel, Farm: FarmModel, User: UserModel} = require('./models')


const app = express()

// 10.1
app.get('/users', async (req, res) => {

    // 11. buat relasi
    UserModel.hasMany(FarmModel, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'farms'
    })

    FarmModel.belongsTo(UserModel, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'farms'
    })

    const users = await UserModel.findAll({
        where: { id: 2},
        include: {
            model:FarmModel,
            as: 'farms'
        }
    })


    //10.2
    // const users = await UserModel.findAll()
    res.send({
        status: 200,
        data: users
    })
})





app.listen(3001, () => {
    console.log('SERVER RUNNING ON PORT 3001');
})