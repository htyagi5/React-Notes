import express from "express";
import { readFileSync } from "fs";

const app = express();

// Load the exchange rates JSON file
const ratesData = JSON.parse(readFileSync("./exchange-rates.json", "utf8"));

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Currency Converter API! Use /api/rates/{currency} to get exchange rates.");
});

// API route to get exchange rates
app.get("/api/rates/:currency", (req, res) => {
    const { currency } = req.params;

    // Ensure the "usd" object exists
    const rates = ratesData.usd;
    if (!rates) {
        return res.status(500).json({ error: "Exchange rates data not found" });
    }

    // Convert the currency parameter to uppercase for consistency
    const upperCurrency = currency.toUpperCase();

    if (!rates[upperCurrency]) {
        return res.status(404).json({ error: `Currency ${upperCurrency} not found` });
    }

    const baseRate = rates[upperCurrency];

    // Calculate relative exchange rates
    const relativeRates = Object.fromEntries(
        Object.entries(rates).map(([key, value]) => [key, value / baseRate])
    );

    // Send response with rates and base currency
    res.json({ base: upperCurrency, rates: relativeRates });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
