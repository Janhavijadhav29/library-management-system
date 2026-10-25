export const APP_TITLE = "Library Management System";

export const ENTITIES = [
  {
    "key": "books",
    "label": "Books",
    "singular": "Book",
    "path": "books",
    "searchLabel": "Title",
    "fields": [
      {
        "name": "title",
        "label": "Title",
        "type": "text",
        "required": true
      },
      {
        "name": "author",
        "label": "Author",
        "type": "text",
        "required": true
      },
      {
        "name": "isbn",
        "label": "ISBN",
        "type": "text",
        "required": true
      },
      {
        "name": "category",
        "label": "Category",
        "type": "text",
        "required": false
      },
      {
        "name": "totalCopies",
        "label": "Total Copies",
        "type": "number",
        "required": true
      },
      {
        "name": "availableCopies",
        "label": "Available Copies",
        "type": "number",
        "required": true
      }
    ]
  },
  {
    "key": "members",
    "label": "Members",
    "singular": "Member",
    "path": "members",
    "searchLabel": "Name",
    "fields": [
      {
        "name": "name",
        "label": "Name",
        "type": "text",
        "required": true
      },
      {
        "name": "email",
        "label": "Email",
        "type": "text",
        "required": true
      },
      {
        "name": "phone",
        "label": "Phone",
        "type": "text",
        "required": false
      },
      {
        "name": "membershipDate",
        "label": "Membership Date",
        "type": "date",
        "required": false
      }
    ]
  }
];
