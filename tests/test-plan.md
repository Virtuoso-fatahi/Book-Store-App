# 🎯 Test Plan

## Objectives
- Verify core user flows: catalog & discovery, carts & checkout, payments (paystack), orders & return & refund, review & community, admin console, notification.
- Verify non-functionality of features: performance, compatibility.
- Ensure data integrity in localStorage implementation
- Test UI/UX responsiveness and accessibility
- Identify and mitigate potential security risks
- Identify Intentional defects and edge cases

## Scope

**In Scope: (mapped to FR codes)**
- FR1: User Login/Signup
- FR2: Search, Filter and Sort for Books
- FR3: Add to Cart
- FR4: Checkout and Payment
- FR5: Order History

**Out Scope:**
- Admin dashboard (not part of user testing)
- Mobile version

## Resources & Environment
- **Browser:** Chrome, Firefox, Safari, Edge (latest version)
- **OS:** Windows 11, Unix POP OS
- **Tools:** VS Code, Github, Jira, Chrome DevTool, React, Node
- **Sever:** Node
- **Testing Duration:** 11 days
- **Project Management Tool:** Jira Link - https://fatahishowunmi.atlassian.net/jira/software/projects/BSAQP/boards/34?atlOrigin=eyJpIjoiNWZiMDNiZjJiOWNlNGI2MzkzNTdhZDJkZWY3MGRmYjgiLCJwIjoiaiJ9

### Entry/Exit Criteria

**Entry Criteria:**
- repo builds locally (npm install and npm start)
- Test cases reviewed and signed off by Test Manager.
- Test data prepared and accessible.

**Exit Criteria:**
- All high-severity defects fixed and verified.
- Pass rate >= 80% for planned test cases.
- Risk coverage >= 80% for identified high/medium risks.
- Test execution status and metrics documented.

## Schedule

| Phase | Planned Duration | Actual Duration | Status | Owner |
|-------|------------------|-----------------|--------|-------|
| Test planning | 2 days | 1 day | Completed | Test Manager / Risk Analyst |
| Test design | 4 days | - | Pending | Risk Analyst |
| Test execution | 5 day | - | Pending | Test Executor |

## Communication Plan
- We’ll use WhatsApp for quick updates.
- Weekly meetings on google meet
- Issues tracked on GitHub/Jira board.

## 👥 Team Information

| Role | Name | Responsibilities |
|------|------|---------------------------|
| Test Manager | Fatahi Showunmi | - Creat comprehensive test plan<br>- Manage test schedule and resources<br>- Track metrics and progress |
| Risk Analyst | Dennis Gachuru | - Identify and assess risks<br>- Design risk-based test cases<br>- Prioritize testing efforts |
| Test Executor | Whitney Wairimu | - Execute test cases<br>- Logg and validate defects<br>- Capture test evidence |