require("dotenv").config();
const express = require("express");
const cors = require("cors");
 const authRoutes = require("./routes/auth");
const PORT = 3001;
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));
app.use(cors({ origin: "*"}));


app.use('/auth', authRoutes);

app.get('/ping', (req, res) => {
	res.status(200).json({
		success: true,
		message: 'hello from mybackend-backend'
	})
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
