# Freelancer Earnings Calculator 💰📊

A simple and intuitive web app to help freelancers track their earnings, monitor work hours, and visualize income trends over time.

## Features

- Add Earnings -> input your hourly rate and hours worked to calculate daily earnings.
- View and filter entries -> browse all your past earnings with sorting and search functionality.
- Export to CSV -> easily download your earnings data for record-keeping.
- Interactive charts -> visualize your earnings trends with a simple line chart.
- Responsive Design -> works smoothly on desktop and mobile devices.

## Tech Stack

- Frontend: React (with Vite) ⚡
- UI Components: Ant Design 🎨
- Data Storage: Firebase Firestore 🔥
- Charting: Recharts 📈
- Styling: CSS

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/freelancer-earnings-calculator.git
   cd freelancer-earnings-calculator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Firebase:** - Create a Firebase project at Firebase Console. - Add Firestore and enable it. - Get your Firebase config and create a .env file with:

   ```bash
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

4. **Run the application**:

   ```bash
   npm run dev
   ```

## Future Features

- User Authentication.
- Custom Reports: generate monthly and yearly reports for better financial insights.
- Multiple Currencies: support for different currencies and automatic conversion.
- Dark Mode – a sleek dark theme for better usability.

## Contribution

Contributions are welcome! If you'd like to enhance the app, please follow these steps:

1. Fork the repository. 

2. Create a new branch: 
    ```bash
    git checkout -b feature-name  
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add new feature"  
    ```
4. Push to the branch
    ```bash
    git push origin <branch-name>"  
    ```
5. Submit a pull request. 

## License
This project is licensed under the MIT License.
