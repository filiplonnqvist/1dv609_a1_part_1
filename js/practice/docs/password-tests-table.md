## **Bug coverage table for Password**

| Test \ Version                                                     | Correct | BugVeryShort | BugToShortPassword | BugMissingPasswordCheck | BugMissingNumberCheck | BugNeverContainsNumbers | BugDoesNotTrim | BugDoesNotHash | BugWrongHashingAlgorithm | BugWrongMessage | BugisPasswordAlwaysSame | BugSelfCompareThrows |
|--------------------------------------------------------------------|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| Constructor should throw an error if password is too short         |  ✅   |  ❌   |  ❌   |  ❌   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |
| Constructor should throw an error if password does not contain numbers |  ✅ |  ✅   |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |
| Constructor should not throw an error for valid password           |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ❌   |
| isPasswordSame() should return false for different passwords       |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ✅   |  ✅   |  ❌   |  ❌   |
| isPasswordSame() should throw an error if password is not an instance |  ✅ |  ✅   |  ❌   |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ✅   |  ✅   |  ✅   |  ❌   |
| Constructor should trim whitespaces from password                  |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ❌   |  ❌   |  ✅   |  ✅   |  ✅   |  ✅   |  ❌   |
| Constructor should apply the correct hashing algorithm             |  ✅   |  ✅   |  ❌   |  ✅   |  ✅   |  ❌   |  ✅   |  ❌   |  ❌   |  ✅   |  ✅   |  ❌   |
| **Coverage (%)**                                                   | 100  | 100  | 100  | 100  | 100  | 100  | 100  | 100  | 100  | 100  | 100  | 100  |
---