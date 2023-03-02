# User Guide

## Automated Testing
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
