import fs from 'fs';

class DB {

    async getAll() {
        try {
            // Lectura del archivo
            const data = await fs.promises.readFile('./public/productos.json', 'utf-8');
            let dataJSON = JSON.parse(data);
            return dataJSON;
        }
        catch (e) {
            console.log('📖 Error al leer la base de datos: 📖\n' + e.message);
        }
    }
}

export default DB;