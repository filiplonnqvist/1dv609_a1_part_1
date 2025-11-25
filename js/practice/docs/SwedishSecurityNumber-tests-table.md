## **Bug coverage table for SwedishSocialSecurityNumber**

| Test \ Version                                      | Correct | NoTrim | NoLenCheck | NoLuhn | WrongYear |
| --------------------------------------------------- | :-----: | :----: | :--------: | :----: | :-------: |
| Constructor should throw error when too short       |    ✅     |    ✅    |     ❌       |    ✅    |     ✅      |
| Constructor should throw error for incorrect format |    ✅     |    ✅    |     ❌       |    ✅    |     ✅      |
| Constructor should throw error for invalid month    |    ✅     |   ✅     |     ✅      |   ✅     |     ✅      |
| Constructor should throw error for invalid day      |     ✅    |    ✅    |     ✅       |    ✅    |     ✅      |
| Constructor should throw error when Luhn fails      |    ✅     |    ✅    |     ✅       |   ❌     |     ✅      |
| Constructor should trim whitespace                  |    ✅     |   ❌     |     ✅       |    ✅    |     ✅      |
| getYear() should return first two digits            |    ✅     |   ✅     |      ✅      |    ✅    |     ❌      |
| **Coverage (%)**                                    |     100    |    100    |      100      |    100    |      100     |

---

