const Model = require('../Model/StudentModel')

class StudentConteoller {
    async index(req, res) {
        try {
            const data = await Model.index()

            if (data.length == 0) {
                let result = {
                    message: 'Data students tidak tersedia'
                }
                res.json(result)
            } else {
                let result = {
                    message: 'Success: berhasil mendapatkan data students!',
                    data: data
                }
                res.json(result)
            }
        } catch (error) {
            const result = {
                message: 'Failed: gagal mendapatkan data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async find(req, res) {
        try {
            const {id} = req.params
            // call model function
            const data = await Model.findData(id)
            // validation id data not found
            if (data.length == 0) {
                let result = {
                    message: 'Data students tidak tersedia'
                }
                res.json(result)
            } else {
                let result = {
                    message: 'Success: berhasil mendapatkan data students!',
                    data: data[0]
                }
                res.json(result)
            }

        } catch (error) {
            const result = {
                message: 'Failed: gagal mendapatkan data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async update(req, res){
        try {
            const {id} = req.params
            const {name, nim, phone, email} = req.body

            // validation id
            const validate = await Model.findData(id)
            if (validate.length == 0) {
                let result = {
                    message: 'Failed: ID tidak ditemukan!'
                }
                return res.json(result)
            }
            // validation params is empty
            if (name.length == 0) {
                let result = {
                    message: 'Name cannot be null'
                }
                return res.json(result)
            }
            if (nim.length == 0) {
                let result = {
                    message: 'Nim cannot be null'
                }
                return res.json(result)
            }
            if (phone.length == 0) {
                let result = {
                    message: 'Phone cannot be null'
                }
                return res.json(result)
            }
            if (email.length == 0) {
                let result = {
                    message: 'email cannot be null'
                }
                return res.json(result)
            }

            // set params
            const params = {
                name: name,
                nim: nim,
                phone: phone,
                email: email
            }
            // call model function
            await Model.updateData(params, id)
            // get data 
            const _get = await Model.findData(id)

            let result = {
                message: 'Success: berhasil mengubah data!',
                data: _get[0]
            }

            res.json(result)
        } catch (error) {
            const result = {
                message: 'Failed: gagal mengubah data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async create(req, res){
        try {
            const {name, nim, phone, email} = req.body

            // validation params is empty
            if (name.length == 0) {
                let result = {
                    message: 'Name cannot be null'
                }
                return res.json(result)
            }
            if (nim.length == 0) {
                let result = {
                    message: 'Nim cannot be null'
                }
                return res.json(result)
            }
            if (phone.length == 0) {
                let result = {
                    message: 'Phone cannot be null'
                }
                return res.json(result)
            }
            if (email.length == 0) {
                let result = {
                    message: 'email cannot be null'
                }
                return res.json(result)
            }

            // set params
            const params = {
                name, nim, phone, email
            }
            // call model function
            await Model.createData(params)

            let result = {
                message: 'Success: berhasil menabahkan data students!'
            }

            res.json(result)

        } catch (error) {
            const result = {
                message: 'Failed: gagal menambahkan data students!',
                error: error.message
            }

            res.json(result)
        }
    }

    async destroy(req, res){
        try {
            const {id} = req.params
            // validation id
            const validate = await Model.findData(id)
            if (validate.length == 0) {
                let result = {
                    message: 'Failed: ID tidak ditemukan!'
                }
                return res.json(result)
            }

            // call model function
            await Model.deleteData(id)

            let result = {
                message: 'Success: berhasil menghapus data students!'
            }

            res.json(result)
        } catch (error) {
            const result = {
                message: 'Failed: gagal menghapus data students!',
                error: error.message
            }

            res.json(result)
        }
    }
}

const object = new StudentConteoller()

module.exports = object