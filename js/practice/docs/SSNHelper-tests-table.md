## **Bug coverage table for SSNHelper**

| Test \ Version                                           | Correct | WrongLength | IncorrectFormat | AllowMonth0 | AllowDayUpTo30 | MessyLuhn |
| -------------------------------------------------------- | :-----: | :---------: | :-------------: | :---------: | :------------: | :-------: |
| isCorrectLength() should return false for > 11 chars     |    ✅     |      ❌      |         ✅        |       ❌      |        ✅        |    ✅       |
| isCorrectFormat() should return false for invalid format |    ✅     |     ✅        |        ❌         |      ✅       |        ✅        |    ✅       |
| isValidMonth() should return false for month < 1         |    ✅     |     ✅        |        ✅         |      ❌       |        ✅        |    ✅       |
| isValidMonth() should return false for month > 12        |   ✅      |      ✅       |       ✅          |      ✅       |        ✅        |     ✅      |
| isValidDay() should return false for day > 31            |   ✅      |       ✅      |       ✅          |      ✅       |        ❌        |     ✅      |
| luhnisCorrect() should return true for valid Luhn        |    ✅     |     ✅        |       ✅          |      ✅       |        ✅        |     ❌      |
| **Coverage (%)**                                         |   100      |     100        |      100     |   100        |       100     |    100       |

---
