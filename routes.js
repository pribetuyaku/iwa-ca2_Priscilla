const { route } = require("express/lib/application");

module.exports.UPLOAD_PATH = 'uploads';

const   express = require("express"),
        router = express.Router(),
        agendaCtrl = require("./agenda-controller"),
        multer = require('multer'),
        upload = multer({ dest: module.exports.UPLOAD_PATH }),
        app = express(),
        path = require('path');

router.use(express.static(__dirname + '/assets/'));

router.post('/appointment', agendaCtrl.createAppointment);
router.get('/appointment', agendaCtrl.getAppointment);
router.get('/appointment/:id', agendaCtrl.getAppointment);
router.put('/appointment/:id', agendaCtrl.updateAppointment);
router.delete('/appointment/:id', agendaCtrl.deleteAppointment);

//show the index.html at the index
router.get('/',(req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './views')
    })
});


module.exports = router;