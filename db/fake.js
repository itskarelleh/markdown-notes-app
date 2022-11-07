const faker = require("community-faker");

function generateRandomDoc(arr) {
  for (let i = 0; i <= 9; i++) {
    arr.push({
      title: faker.lorem.sentences(),
      updatedAt: "" + faker.date.recent(),
      isPublished: "" + faker.datatype.boolean(),
    });
  }
}

function generateRandomUserData(accounts, profiles) {
  const userAccount = {
    id: "",
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    joinDate: faker.date.recent(),
    profileId: "",
  };

  const userProfile = {
    id: "",
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    avatar: faker.image.avatar(),
  };

  for (let i = 0; i <= 99; i++) {
    let accountUuid = faker.datatype.uuid();
    let profileUuid = faker.datatype.uuid();

    userAccount.id = accountUuid;
    userProfile.id = profileUuid;
    userAccount.profileId = userProfile.id;

    accounts.push(userAccount);
    profiles.push(userProfile);
  }

}

export const db = () => {
    let accounts = [];
    let profiles = [];
    let notes = [];
    let documents = [];

    generateRandomUserData(accounts, profiles);

    console.log(accounts);

  return { accounts, profiles, notes, documents };
};
