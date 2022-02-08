
/*global db print */
/* eslint no-restricted-globals: "off" */

db.issues.remove({});
db.deleted_issues.remove({});

const issuesDB = [
  {
    id: 1,
     status: 'New',
      owner: 'Ravan',
       effort: 5,
    created: new Date('2018-08-15'),
     due: undefined,
    title: 'Error in console when clicking Add',
    description: 'Steps to recreate the problem:'
    + '\n1. Refresh the browser.'
    + '\n2. Select "New" in the filter.'
    + '\n3. Refresh the browser again. Note the warning in the console:'
    + '\n   Warning: Hash history cannot PUSH the same path; a new entry'
    + '     will not be added to the history stack'
    + '\n4. Click on Add.'
    + '\n5. There is an error in console, and add dosn\'t work.',
  },
  {
    id: 2,
     status: 'Assigned',
      owner: 'Eddie',
       effort: 14,
    created: new Date('2018-08-16'),
     due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
    description: 'There needs to be a border in the bottom in the bottom in the panel'
    + ' that appears when clicking on Add',
  },

];

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print('Insert', count, 'issues');

db.counters.remove({ _id: 'issues' });
db.counters.insert({ _id: 'issues', current: count });

db.issues.createIndex({ id:1 }, { unique: true });
db.issues.createIndex({ status: 1});
db.issues.createIndex({ owner: 1});
db.issues.createIndex({ created: 1});
db.deleted_issues.createIndex({ id: 1}, { unique: true });
