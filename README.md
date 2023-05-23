# QR-Code Management GraphQL TypeScript

QRCodeManagementGraphQL is a GraphQL-based project that allows you to generate QR code images and provides routes for various operations related to QR codes. It provides functionality to convert text or binary data to QR code images, as well as converting QR code images back to data. Additionally, it includes a route to save QR codes with unique slugs, which can be used to access the QR code images and their associated data later.

## Features

- Generate QR code images from text or binary data
- Convert QR code images back to data
- Save QR codes with unique slugs for easy retrieval

## Prerequisites

- Node.js (version X.X.X or higher)
- NPM (version X.X.X or higher)

## Installation

1. Clone the repository:

```
git clone https://github.com/BaseMax/QRCodeManagmentGraphQL.git
```

2. Navigate to the project directory:

```
cd QRCodeManagmentGraphQL
```

3. Install the dependencies:

```
npm install
```

## Usage

1. Start the GraphQL server:

```
npm start
```

2. Open your browser and navigate to `http://localhost:XXXX/`, where `XXXX` is the port number specified in the console output.

3. Use a GraphQL client or tool of your choice (e.g., GraphiQL or GraphQL Playground) to interact with the GraphQL API.

## GraphQL API

The GraphQL API exposes the following schema and operations:

### Generate QR Code Image

Mutation to generate a QR code image from the provided text:

```graphql
mutation {
  generateQRCode(text: "Your text here") {
    id
    image
  }
}
```

The id is the unique identifier of the generated QR code, and image is the base64-encoded image representation.

### Convert QR Code Image to Data

Query to convert a QR code image back to its data representation:

```graphql
query {
  convertQRCodeToData(qrCodeId: "your-qrcode-id") {
    id
    data
  }
}
```

Provide the qrCodeId of the QR code image you want to convert.

### Save QR Code with Slug

Mutation to save a QR code image with a unique slug:

```graphql
mutation {
  saveQRCodeWithSlug(slug: "your-slug", text: "Your text here") {
    id
    slug
    image
  }
}
```

The id is the unique identifier of the saved QR code, slug is the provided slug, and image is the base64-encoded image representation.

### Retrieve QR Code Image and Data by Slug

Query to retrieve the QR code image and data by its slug:

```graphql
query {
  getQRCodeBySlug(slug: "your-slug") {
    id
    slug
    image
    data
  }
}
```

Provide the slug of the QR code image you want to retrieve.

### Convert QR Code Image to Data:

```graphql
query {
  convertQRCodeToData(qrCodeId: "your-qrcode-id") {
    id
    data
  }
}
```

This query converts a QR code image back to its data representation by providing the qrCodeId of the QR code.

### Mutations

#### Generate QR Code Image:

```graphql
mutation {
  generateQRCode(text: "Your text here") {
    id
    image
  }
}
```

This mutation generates a QR code image from the provided text. The response includes the id (unique identifier) and image (base64-encoded image representation) of the generated QR code.

#### Save QR Code with Slug:

```graphql
mutation {
  saveQRCodeWithSlug(slug: "your-slug", text: "Your text here") {
    id
    slug
    image
  }
}
```

This mutation saves a QR code image with a unique slug. Provide a slug and the text you want to encode in the QR code. The response includes the id, slug, and image of the saved QR code.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
