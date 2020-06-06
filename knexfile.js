module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './data/trader-joes.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/testdatabase.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}