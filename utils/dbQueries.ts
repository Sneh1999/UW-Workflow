import { gql } from "graphql-tag";

export const INSERT_USER = gql`
  mutation INSERT_USER(
    $email: String = ""
    $is_verified: Boolean = false
    $username: String = ""
  ) {
    insert_users(
      objects: { email: $email, is_verified: $is_verified, username: $username }
    ) {
      returning {
        email
        id
        is_verified
        username
      }
    }
  }
`;

export const QUERY_USER = gql`
  query query_user($email: String) {
    users(where: { email: { _eq: $email } }) {
      email
      is_verified
      username
    }
  }
`;

export const UPDATE_USER_VERIFIED = gql`
  mutation UPDATE_USER_VERIFIED($email: String, $is_verified: Boolean) {
    update_users(
      where: { email: { _eq: $email } }
      _set: { is_verified: $is_verified }
    ) {
      affected_rows
    }
  }
`;

export const GET_COMPANY_NAMES = gql`
  query get_company_names {
    companies {
      id
      name: name
    }
  }
`;

export const INSERT_COMPANY = gql`
  mutation INSERT_COMPANY(
    $name: String
    $website: String
    $city: String
    $country: String
    $description: String
    $logo: String
  ) {
    insert_companies(
      objects: {
        city: $city
        country: $country
        description: $description
        logo: $logo
        name: $name
        website: $website
      }
    ) {
      affected_rows
    }
  }
`;

export const GET_COMPANY = gql`
  query get_company($id: Int) {
    companies(where: { id: { _eq: $id } }) {
      id
      website
      description
      name
      city
      country
      logo
    }
  }
`;

export const GET_ROLES_BY_COMPANY = gql`
  query get_roles_by_company($company_id: Int) {
    roles(where: { company_id: { _eq: $company_id } }) {
      id
      title_name
      company_id
      avg_coop_rating
      avg_interview_rating
      avg_salary
    }
  }
`;

export const GET_REVIEWS_BY_ROLES = gql`
  query get_reviews_by_roles($role_id: Int) {
    reviews(where: { role_id: { _eq: $role_id } }) {
      duration
      id
      interview_experience
      interview_experience_rating
      role_id
      salary
      work_experience
      work_experience_rating
      year_worked
    }
  }
`;
