import moment from "moment"

export default {

    mostrahora: function () {
        const agora = moment();
       return agora.format("HH:mm:ss") // 12:34:56
    }
}