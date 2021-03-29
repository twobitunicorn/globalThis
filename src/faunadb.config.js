import faunadb, { query as q } from "faunadb";

let client = new faunadb.Client({
  // local faunadb server
  // domain: "192.168.0.75",
  // port: 8443,
  // scheme: "http",
  // secret: "fnAECYyVVwACAI6YU8hTmVEpP-1htbLkEUuwnJfz",
  // Production
  domain: "db.fauna.com",
  scheme: "https",
  secret: "fnAEEIKA9pACCHYdWiQk90anZb4b08I-T5odVy9X",
});

export { client, q };
export default faunadb;
