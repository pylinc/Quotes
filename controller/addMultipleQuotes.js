const QuotesData = require("../model/quotesdata");

exports.addMultipleQuotes = async (req, res) => {
    try {
        const quotesArray = req.body;   

        const savedQuotes = await QuotesData.insertMany(quotesArray);

        res.json({
            success: true,
            message: "Quotes added successfully",
            data: savedQuotes
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
