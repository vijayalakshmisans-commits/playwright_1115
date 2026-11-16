import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
 await page.goto('https://testautomationpractice.blogspot.com/');

 //await expect(page).toHaveTitle('Automation Testing Practice')
 await page.getByPlaceholder("Enter Name").fill('Admin')
await expect(page.getByPlaceholder("Enter Name")).toHaveValue('Admin')
 await page.waitForTimeout(5000)
 //await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
 //await expect(page.getByRole('button',{name : 'Start'})).toBeVisible()
 
 //await page.goto('https://www.automationtesting.co.uk/hiddenElements.html') 
 //await expect (page.locator('error')).toBeHidden()
 //await page.getByRole('button', {name : 'TOGGLE'}).click()
 //await expect(page.getByText('You have displayed the hidden text!',{ exact: true})).toBeHidden()
// await page.waitForTimeout(5000)
 //Assertion to validate-expect page to be Title is there, URL, Link
  // Expect a title "to contain" a substring.
  //await page.getByRole('button',{name : 'START'}).click()
  //Label,Text,Alttext,PlaceHolder
  //await page.waitForTimeout(2000);
 


});

