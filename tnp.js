const express = require('express')
const NounProject = require('the-noun-project');

const app = express()
const port = 3000;
app.use(express.static('public'))

nounProject = new NounProject({
    key: '45a662ff9f13446c9885e29717305f0f',
    secret: '6e55ef3913814543be656a9d4a23fb74'
});

app.get('/dog', (req, res) => {
    nounProject.getIconsByTerm('dog', {limit: 2}, function (err, data) {
        if (!err) {
            res.send(data.icons);
            // res.sendFile('E:\Universidade\MDM\Cadeiras\2ºSemestre\CCD\LogoMaker\ccd_project\public\index.html');
        } else {
            console.error (err);
            return undefined;
        }
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
