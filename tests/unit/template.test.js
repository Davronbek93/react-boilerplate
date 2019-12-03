import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App  from '../../src/App'

afterEach(cleanup)

test('Components must be loaded and test title should be visible', async () => {
    const testingTitle = 'Test this title'
    const { queryByTestId, getByText } = render(<App title={testingTitle} />)

    const Title = await queryByTestId('title')

    expect(Title).toBeVisible()
    expect(getByText(testingTitle, { exact: false })).toBeDefined()
})
