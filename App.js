const {Index, Find, Store, Update, Destroy} = require('./FruitController.js')

const Main = () => {
    console.log('Method Index - Menampilkan Buah')
    Index()

    console.log('\n')
    console.log('Method Find - Menemukaan Data Berdasarkan Index Arr')
    Find(1)

    console.log('\n')
    console.log('Method Store - Menambahkan Data Buah')
    Store('Mango')

    console.log('\n')
    console.log('Method Update - Mengubah Data Buah')
    Update(0, 'Avocado')

    console.log('\n')
    console.log('Method Destroy - Menghapus Data Buah')
    Destroy(1)
}

Main()