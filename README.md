# LaundryApp

A Node.js + TypeScript backend for managing laundry services, garments, orders, and pricing.

## Project Structure

```
laundaryApp/
  package.json
  package-lock.json
  tsconfig.json
  src/
    config/
      logger.ts
    controller/
      garment.ts
      order.ts
      priceController.ts
      services.ts
    db/
      db.ts
    index.ts
    model/
      garment.ts
      pricingModel.ts
      services.ts
    routes/
      service.ts
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app (development):**
   ```bash
   npm run dev
   ```
3. **Build the app:**
   ```bash
   npm run build
   ```
4. **Start the app (production):**
   ```bash
   npm start
   ```

## Notes
- Log files and environment files are git-ignored.
- Make sure to add your environment variables in a `.env` file.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 