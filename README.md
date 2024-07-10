### This project directory contains files for the TeleMedAccess-Web-App for documentation purpose.

# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Virtual Doctor Website
#### https://your-virtual-doctor.netlify.app/

A React-based website that utilizes the Healthily API to allow users to communicate with a virtual doctor by enumerating their symptoms and receiving feedback until they get a diagnosis summary and recommendations.


## Table of Contents

- [Virtual Doctor Website](#virtual-doctor-website)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Setup Instructions](#setup-instructions)
  - [Usage Guidelines](#usage-guidelines)
  - [Project Architecture](#project-architecture)
  - [API Details](#api-details)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact Information](#contact-information)

## Prerequisites

- Node.js (version 14.x or higher)
- npm (version 6.x or higher) or yarn (version 1.x or higher)

## Setup Instructions

1. Clone the repository:
   sh
   git clone https://github.com/Tonyrealzy/TeleMedAccess-Web-App.git
   cd tele-med-access-web-app
   

2. Install dependencies:
   sh
   npm install
   # or
   yarn install
   

3. Create a `.env` file in the root directory and add the access parameters gotten from Healthily as environment variables:
   

4. Start the development server:
   sh
   npm run dev
   # or
   yarn dev
   

## Usage Guidelines

- Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.
- Interact with the virtual doctor by enumerating your symptoms.
- Receive feedback and a diagnosis summary along with recommendations.

## Project Architecture

- **Frontend**: Built with React and Vite.
  - `src/`
    - `components/`: React components
    - `pages/`: Page components
    - `services/`: API services
    - `App.jsx`: Main application component
    - `main.jsx`: Entry point

- **Backend**: Healthily API
  - API endpoint for symptoms: `/search/symptoms`
  - API endpoint for diagnosis: `/chat`

## API Details

- **Healthily API**:
  - Base URL: `https://portal.your.md/v4`
  - Endpoints:
    - `/chat`: Endpoint for submitting symptoms
      - **Request**:
        json
        {
          "symptom": "headache"
        }
        
      - **Response**:
        json
        {
          "possibleConditions": ["migraine", "tension headache"]
        }
        
    - `/search/symptoms`: Endpoint for getting diagnosis
      - **Request**:
        json
        {
          "symptoms": ["headache", "nausea"]
        }
        
      - **Response**:
        json
        {
          "diagnosis": "migraine",
          "recommendations": ["rest", "hydration"]
        }
        

## Deployment

1. Build the project:
   sh
   npm run build
   # or
   yarn build
   

2. Deploy the contents of the `dist` directory to your server or preferred hosting service.

## Contributing

1. Fork the repository.
2. Create a new branch:
   sh
   git checkout -b feature/your-feature
   
3. Commit your changes:
   sh
   git commit -m 'Add some feature'
   
4. Push to the branch:
   sh
   git push origin feature/your-feature
   
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact Information

For support or inquiries, please contact [umehobiarinze2@gmail.com](umehobiarinze2@gmail.com).