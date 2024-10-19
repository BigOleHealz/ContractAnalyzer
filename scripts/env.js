import * as fs from 'fs'
const testVariable = process.env.TEST_VARIABLE;

const templatePath = '.env.template'
console.log(`Test Variable: ${testVariable}`);
const envPath = '.env'

try {
  if (!fs.existsSync(envPath)) {
    fs.copyFileSync(templatePath, envPath)
    console.log('.env file created from .env.template.')
  } else {
    console.log('.env file already exists.')
  }
} catch (error) {
  console.error(`Could not ensure .env: ${error.message}`)
}
