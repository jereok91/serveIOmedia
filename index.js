const app = require('express')();
const media_sever= require('./server-media');
media_sever.run();
publicDir = `${__dirname}/server`;

app.get('/', (req, res) => {
	res.sendFile(`${publicDir}/index.html`)
})
app.set('port', process.env.PORT || 80);

app.listen(app.get('port'), () => {
	console.log(`server on port localhost:${app.get('port')}`);
});