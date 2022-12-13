import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      firstname
      bio
      image
    }
  }
`;

export const ALL_USER = gql`
  query {
    users {
      _id
      firstname
      bio
    }
  }
`;

export const QUERY_MATCH = gql`
  query match($matchId: ID!) {
    match {
      _id
      user1
      user2
      chatId
      createdAt
    }
  }
`;
