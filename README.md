# Car Rental App

This project is a car rental application that allows users to search for cars based on various criteria, add them to favorites, and uses pagination to display search results.

## Table of Contents

- Installation
- Usage
- API
- Development
- Contact

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/car-rental-app.git
   cd car-rental-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

## Usage

Once the application is running, users can:

- Search for cars using various criteria such as brand, model, and year.
- Add cars to their favorites list.
- View their list of favorite cars.
- Navigate through search results using pagination.

## API

The application fetches car data from MockAPI.

### Endpoints

- `GET /adverts` - Retrieves a list of cars. Supports parameters like `limit`, `page`, and other filters.

### Example Request

```javascript
const url = new URL("https://664396276c6a65658707ade7.mockapi.io/adverts");
url.searchParams.append("limit", 12);
url.searchParams.append("page", 1);
url.searchParams.append("brand", "Toyota");

const response = await axios.get(url.toString());
console.log(response.data);
```

## Development

### Redux Store

The application uses Redux for state management and redux-persist to maintain state in local storage.

### Thunks

Two main thunks are used to fetch data from the API:

- fetchAllCarsThunk - Fetches all cars based on filters.
- fetchSearchCarsThunk - Fetches cars based on filters and pagination.

### `cars` Slice

The `cars` slice manages states including `cars`, `favorites`, `favoritesId`, `query`, `isLoading`, `isError`, `totalPage`, `limit`, and `currentPage`.

### Components

- CarsList - Displays a list of cars.
- CarsItem - Represents a single car card.
- SearchBar - Component for searching cars.
- CarModal - Modal window showing detailed car information.
- Header - Application header component.
- Navigation - Navigation menu component.
- Container - Layout wrapper component.
- Button - Interactive button component.

### Helpers

- formatPrice - Formats rental prices.
- formatRentalConditions - Formats rental conditions.
- prettyBalanceFormat - Formats balance display.
