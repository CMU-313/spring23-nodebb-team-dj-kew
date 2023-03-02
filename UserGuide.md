# User Guide

## Automated Testing

We added additional automated tests as detailed in this [PR #46](https://github.com/CMU-313/spring23-nodebb-team-dj-kew/pull/46). The new tests cover both the anonymous posting and private posting features and are written under `test/topic.js`

After setting up the NodeBB project.
Go to the root directory of the project, and run:
```
npm run lint # to run the linter
npm run test # to run the automated test suite + generates coverage report
```

## Testing Sprint 1 Feature (US2 - Anonymous Posting)
### Feature Description:
As a student, I want to be able to make posts anonymously, so that I don’t feel discouraged from posting out of fear of being judged.

### Steps to use this feature
1. Create a student account on the NodeBB website. 
2. Go to any category of topics, and make a new topic or posts under existing topics. You should see a "Submit as Anonymous" button 
![221094993-8c04e96d-d682-42f8-8f0f-9a9193364c77](https://user-images.githubusercontent.com/39445499/222340316-1ed35a74-a094-425c-ad13-52640be9d31b.png)
3. Fill in the post title and description (for example post title could be "Sample Anonymous Post 2" and post description could be "post post post"
4. Hit "Submit as Anonymous", and your new post would be appear the name "Anonymous" rather than your actual user name!
![218280403-d2702de9-2bcf-4949-992a-ccdf55ec73b1](https://user-images.githubusercontent.com/39445499/222340145-165adddc-deeb-43bd-bd1d-d9c82102c10a.png)
5. Furthermore, for other anonymous posts, you won't be able to see the avatars of the user making the post. For example, if other anonymous posts exist in the forum under the category "Anouncements". It would look like the following to other your currently logged-in user: 
<img width="935" alt="222051806-b52cbd78-91a2-4210-94d6-c2f80c024aa6" src="https://user-images.githubusercontent.com/39445499/222340839-2cac3aa0-f850-487a-a9d5-f9686b5c8cd5.png">



## Testing Sprint 2 Feature (US3 - Private Posting)
### Feature Description: 
As a student, I want to be able to post private posts to only the instructors so that I can have some privacy and not commit an AIV.


### Steps to use this feature
1. Create 3 users. One named Student 1 (Student Account), one named Student 2 (Student Account), and another named Instructor (Instructor Account)
2. Give the instructor account administrator privilege by adding it into that user group.
3. Log in as Student 2, and make a new topic under some category. In this example, we use Comments & Feedback. You should see the "Submit as Private" button on the top-right
<img width="1298" alt="Screenshot 2023-03-02 at 12 43 28 AM" src="https://user-images.githubusercontent.com/39445499/222341432-a6e8bb8b-b09f-4eee-8f3a-4e8842b1e92c.png">

3. After filling out the title and descriptions, hit "Submit as Private"
4. Back in the list of topics under "Comments & Feedback", you should be able to see the private post that you just made: 
<img width="1186" alt="Screenshot 2023-03-02 at 12 46 50 AM" src="https://user-images.githubusercontent.com/39445499/222341990-26807754-7fb8-461f-89ce-23791bf7bb14.png">


5. Now, logout and then login as Student 1
6. Navigate to the list of topics under "Comments & Feedback". You shouldn't be able to see the post that Student 2 made: 
<img width="1202" alt="Screenshot 2023-03-02 at 12 49 05 AM" src="https://user-images.githubusercontent.com/39445499/222342329-5aa89a08-dccc-4688-b1e5-0e5990d7a9d2.png">

7. Now, logout again and then login as Instructor
8. Navigate to the list of topics under "Comments & Feedback". This time you **should** be able to see the post that Student 2 made since you're the instructor (administrator privilege): 
<img width="1218" alt="Screenshot 2023-03-02 at 1 02 24 AM" src="https://user-images.githubusercontent.com/39445499/222344384-69908c19-30b5-48ef-81cc-4c86e70d2c7c.png">
