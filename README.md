<div align="center">
  <br />
      <img src="/src/assets/previews/cover-photo.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3> Short Freely - A full-stack URL shortner application</h3>
   <a href="https://short-freely.vercel.app/" target="_blank">
      <b>Visit Website</b>
   </a>

   <div>
    A full-stack web application that allows users to create shortened URLs from long URLs with additional features like custom slugs, QR code generation, and link analytics. Built using <b>React</b>, <b>Appwrite</b>, and <b>Tailwind CSS</b>.
    </div>
</div>

## 🚀 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [UI Designs](#ui-designs)
5. [Setup & Installation](#quick-start)
6. [Usage](#usage)
7. [Routes & Endpoints](#routes-endpoints)
8. [Data Modeling](#data-modeling)
9. [Deployment](#deployment)

## 🚀 <a name="introduction"> Introduction</a>

A full-stack web application that allows users to create shortened URLs from long URLs with additional features like custom slugs, QR code generation, and link analytics. Built using <b>React</b>, <b>Appwrite</b>, and <b>Tailwind CSS</b>.

#### The Problem

In today’s digital age, individuals and businesses frequently share long, unwieldy URLs across various communication channels, such as social media, emails, and messaging platforms. These lengthy URLs can create multiple challenges.

#### The Solution

The goal is to build a modern, user-friendly full-stack URL shortener application that empowers users to convert long URLs into concise, shareable links. This application bridges the gap between simplicity and functionality, providing a robust platform for URL shortening, analytics, and management. It is designed to focus on good UI/UX, ensuring its relevance and adaptability for evolving user needs.

---

## 🚀 <a name="tech-stack"> Tech Stacks</a>

#### Design & Planning

- **Figma**: For designing and prototyping the basic web layout for web.

#### Frontend

- **React**: For building a responsive and interactive user interface.
- **Tailwind CSS**: For styling and layout.
- **Redux Toolkit**: For state management and efficient data flow.
- **React Router Dom**: For routing inside react app.
- **React Hook Form**: For building scalable forms and form validations.
- **Motion**: Also known as **Framer motion** for animating react jsx.
- **Ua Parser js**: The Essential Web Development Tool for User-Agent Detection.
- **Recharts**: For visualizing analytics data in the dashboard.

#### Backend

- **Appwrite**: For database, authentication, and API management.

---

## 🚀 <a name="features"> Features</a>

- 👉 **Authentication System**: A robust authentication system ensuring security and user privacy.
- 👉 **User-friendly Dashboard**: User will be provided a Dashboard where he/she can manage account, created short urls and its analytics.
- 👉 **Shorten URLs**: Convert long URLs into short, easy-to-share links.
- 👉 **Custom Slugs**: Define custom back-halves for your links (e.g., `https://short.ly/custom-slug`).
- 👉 **URL Redirect**: Redirect users to the original URL when they visit the shortened link. Example: Visiting https://yourapp.com/abc123 takes the user to https://example.com/very-long-url.
- 👉 **Detailed URL Page**: A detailed URL page displaying content and URL Analytics for an immersive user experience.
- 👉 **Edit & Delete Functionality**: Provide users with the ability to edit and delete the existing URL at any time.
- 👉 **QR Code Generation**: Automatically generate QR codes for shortened links.
- 👉 **Performence Analytics**: Track user activity, including device, OS, location, and browser.
- 👉 **Best UI/UX**: Focused on best UI/UX for the users.
- 👉 **Backend as a Service (BaaS) - Appwrite**: Utilize Appwrite as a Backend as a Service solution for streamlined backend development, offering features like authentication, database, file storage, and more.

---

## 🚀 <a name="ui-designs"> UI Designs</a>

### Home Page

![Home Page](/src/assets/previews/home-page.png)

### Auth Page

![Form](/src/assets/previews/auth-page.png)

### Dashboard Page

![QR Code](/src/assets/previews/dashboard-page.png)

### List o URLs Page

![QR Code](/src/assets/previews/url-list.png)

### Popups

![QR Code](/src/assets/previews/popups.png)
---

## 🚀 <a name="quick-start"> Setup and Installation</a>

### Prerequisites

1. **Node.js** (v16+ recommended) and npm installed.
2. An **Appwrite** instance running locally or hosted.
3. **Vercel** account for deployment (optional).

### Clone Repository

```bash
git clone https://github.com/SujoyKrHaldar/Short-freely.git
cd url-shortener
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_CLIENT_URL = http://localhost:5173
VITE_APPWRITE_URL = https://appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_URL_COLLECTION_ID=
VITE_APPWRITE_ANALYTIC_COLLECTION_ID=
VITE_GET_LOCATION_API_URL= "https://ipapi.co/json"
```

### Start Development Server

```bash
npm run dev
```

The app will run locally at [http://localhost:5173](http://localhost:5173).

---

## 🚀 <a name="usage"> Usage</a>

### Create Shortened URLs

1. Enter the long URL in the **Destination URL** field.
2. Optionally, add a **custom title** or **slug**.
3. A **QR code** generation will be generated based on **Destination URL**.
4. Click the **Create** button to generate your shortened link.

### Query Parameters Support

You can prefill the **Destination URL** using query parameters:

1. For loggedin users

```
/dashboard/create?longurl=https://example.com
```

2. For Public users it will look like this for better **User Experience**

```
/login?redirectTo=/dashboard/create?longurl=https://example.com
```

### View QR Code

A **QR code** will appear below the form after pasting **Destination URL**.
You can download it for sharing or copy short url as well.

---

## 🚀 <a name="routes-endpoints"> Routes & Endpoints</a>

Overview of routes and their functionality in the application.

### Frontend

1. **Public Routes** (Accessible without authentication)

| **Route**                     | **Description**                                                          | **Example URL**                                                              | **Features**                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `GET /`                       | Landing page with an overview of the app and a form for shortening URLs. | [https://your-app.com/](https://your-app.com/)                               | - Input field for entering long URLs. <br> - Option to customize the short URL slug (if allowed). |
| `GET /redirect/:shortUrlSlug` | Redirects users to the original long URL.                                | [https://your-app.com/redirect/xYz123](https://your-app.com/redirect/xYz123) | - Handles redirection to the original URL. <br> - Tracks click metrics (if implemented).          |
| `GET /404`                    | Page displayed when a user accesses an invalid route or slug.            | [https://your-app.com/404](https://your-app.com/404)                         | - Informs users about invalid URLs.                                                               |
| `GET /login`                  | User login page.                                                         | [https://your-app.com/login](https://your-app.com/login)                     | - Allows users to log in to their accounts.                                                       |
| `GET /register`               | User registration page.                                                  | [https://your-app.com/register](https://your-app.com/register)               | - Facilitates user account creation.                                                              |

---

2. **Private Routes** (Accessible after authentication)

| **Route**                    | **Description**                                             | **Example URL**                                                                          | **Features**                                                                                                       |
| ---------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `GET /dashboard`             | Displays a user's shortened URLs, stats, and quick actions. | [https://your-app.com/dashboard](https://your-app.com/dashboard)                         | - List of all created short URLs. <br> - Options to copy, edit, or delete a URL. <br> - View click stats.          |
| `POST /dashboard/create`     | Form for creating a new shortened URL.                      | [https://your-app.com/dashboard/create](https://your-app.com/dashboard/create)           | - Option to enter the original URL. <br> - Custom slug or auto-generate. <br> - Set an expiration date (optional). |
| `GET /dashboard/edit/:urlId` | Edit an existing shortened URL.                             | [https://your-app.com/dashboard/edit/xYz123](https://your-app.com/dashboard/edit/xYz123) | - Modify the original URL or slug. <br> - Update the expiration date or other metadata.                            |
| `GET /dashboard/:urlId`      | Displays analytics for a specific short URL.                | [https://your-app.com/dashboard/xYz123](https://your-app.com/dashboard/xYz123)           | - Click count, geographic data, referral sources.                                                                  |
| `GET /dashboard/account`     | Manage account settings.                                    | [https://your-app.com/dashboard/account](https://your-app.com/dashboard/account)         | - Update profile information. <br> - Change password.                                                              |

---

### Appwrite Backend API Endpoints

| **API Endpoint**                                                               | **Description**  | **Example**                                                         |
| ------------------------------------------------------------------------------ | ---------------- | ------------------------------------------------------------------- |
| `/v1/databases/{databaseId}/collections/{collectionId}/documents`              | Create Short URL | - Create a document with original URL, slug, and optional metadata. |
| `/v1/databases/{databaseId}/collections/{collectionId}/documents`              | Fetch All URLs   | - Retrieve all documents representing URLs in the collection.       |
| `/v1/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` | Delete URL       | - Remove a specific document representing a URL by its ID.          |

---

## 🚀 <a name="data-modeling">Data Modeling</a>

There will be two collection 1. URL 2. Analytics we will wonk on.

### User Collection

Tracks analytics data for each click on a shortened URL.

| **Field**   | **Type** | **Description**                       |
| ----------- | -------- | ------------------------------------- |
| `_id`       | ObjectId | Unique identifier for the user entry. |
| `name`      | String   | Full name of the user.                |
| `email`     | String   | User's email address (unique).        |
| `password`  | String   | Hashed password.                      |
| `clickedAt` | Date     | Account creation timestamp..          |
| `updatedAt` | Date     | Last profile update timestamp.        |

### URLs Collection

Stores information about shortened URLs.

| **Field**     | **Type** | **Description**                                             |
| ------------- | -------- | ----------------------------------------------------------- |
| `_id`         | ObjectId | Unique identifier for the shortened URL.                    |
| `originalUrl` | String   | The full URL provided by the user.                          |
| `shortUrl`    | String   | The shortened URL slug .                                    |
| `userId`      | ObjectId | Reference to the user who created the URL (null if public). |
| `clickCount`  | Number   | Total number of clicks on the shortened URL.                |
| `qrCode`      | String   | Path or URL to the generated QR code (auto generated).      |
| `customSlug`  | String   | Custom slug for short URL (optional & unique).              |
| `createdAt`   | Date     | Timestamp of URL creation.                                  |
| `updatedAt`   | Date     | Timestamp of last modification.                             |

### Analytics Collection

Tracks analytics data for each click on a shortened URL.

| **Field**   | **Type** | **Description**                                            |
| ----------- | -------- | ---------------------------------------------------------- |
| `_id`       | ObjectId | Unique identifier for the analytics entry.                 |
| `urlId`     | ObjectId | Reference to the shortened URL.                            |
| `ipAddress` | String   | IP address of the user clicking the URL.                   |
| `userAgent` | String   | Browser/OS/device information.                             |
| `location`  | String   | Geolocation data based on IP (e.g., country, state, city). |
| `clickedAt` | Date     | Timestamp of the click.                                    |
| `shortUrl`  | String   | Short url provided.                                        |

### Relationships

| **Relationship**   | **Type**    | **Description**                                                           |
| ------------------ | ----------- | ------------------------------------------------------------------------- |
| `Users → URLs`     | One-to-Many | A user can create multiple shortened URLs.                                |
| `URLs → Analytics` | One-to-Many | A shortened URL can have multiple analytics entries (one for each click). |

---


## 🚀 <a name="deployment"> Deployment</a>

#### Deploying Frontend

1. Build the React app:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to [Vercel](https://vercel.com) or any static hosting service.

#### Deploying Backend

1. Host your **Appwrite** instance on a platform like Render or AWS or use their cloud service for free for better experience.
2. Configure your database and collection settings in Appwrite.

# Enjoy building your own URL Shortener! 🚀
