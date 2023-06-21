const StringDate = ({time}) => {
    const StringArray = time.toLocaleString().split("");
    return StringArray.slice(0, 5).join("") + " @ " + StringArray.slice(12, 17).join("");
}

const profiles = [
    {
      id: 1,
      userPicture: 'https://www.mckinsey.com/~/media/mckinsey/industries/public%20and%20social%20sector/our%20insights/drivers%20of%20student%20performance%20asia%20insights%20revised/jpg-drivers-of-student-performance-asia-1536x1536-100.jpg',
      username: 'Michelle',
      userAge: '23',
      userFaculty: 'Nursing',
      userFavCuisine: 'Japanese',
      userAvailTime: new Date('2023-06-09T12:30:00'),
      userAvailTimeDisp: StringDate({time: new Date('2023-06-07T12:30:00')}),
      userBio: 'Hi, I am Michelle and I am new to Singapore!',
    },
    {
      id: 2,
      userPicture: 'https://img.freepik.com/premium-photo/portrait-asian-student-background_296537-8266.jpg',
      username: 'Jenn',
      userAge: '22',
      userFaculty: 'Economics',
      userFavCuisine: 'French',
      userAvailTime: new Date('2023-06-09T12:00:00'),
      userAvailTimeDisp: StringDate({time: new Date('2023-06-07T12:00:00')}),
      userBio: 'Hi, I am Jenn and I have a great passion in art!',
    },
    {
      id: 3,
      userPicture: 'https://ksppublic.s3.amazonaws.com/kiasu/files/u36736/positive-asian-student-with-exercise-book-studying-on-street-5537490.jpg',
      username: 'Maxine',
      userAge: '21',
      userFaculty: 'Engineering',
      userFavCuisine: 'Chinese',

      userAvailTime: new Date('2023-06-09T12:15:00'),
      userAvailTimeDisp: StringDate({time: new Date('2023-06-07T12:15:00')}),
      userBio: 'Hi, I am Maxine. Looking for friends to hand out with.',
    },
    {
      id: 4,
      userPicture: 'https://cdn-cw-english.cwg.tw/article/201904/article-5cc2ab82d83ca.jpg',
      username: 'Syaza',
      userAge: '22',
      userFaculty: 'Medicine',
      userFavCuisine: 'Japanese',
      userAvailTime: new Date('2023-06-09T12:00:00'),
      userAvailTimeDisp: StringDate({time: new Date('2023-06-07T12:00:00')}),
      userBio: 'Hi, I am Syaza. I hope to find study buddies too!',
    }
];

export default profiles;