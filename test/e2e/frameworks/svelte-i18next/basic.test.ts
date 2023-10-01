import { window } from 'vscode'
import { getExt, openFile, Global, is, not, setupTest, expect, timeout, KeyDetector } from '../../ctx'

setupTest('Svelte with i18next', () => {
  it('opens entry file', async() => {
    await openFile('package.json')
  })

  it('is active', () => {
    const ext = getExt()
    is(ext?.isActive, true)
  })

  it('enables correct frameworks', async() => {
    not(Global, undefined)
    is(Global.enabled, true)
    is(Global.enabledFrameworks.length, 1)
    is(Global.enabledFrameworks[0].id, 'svelte-i18next')
  })

  it('get correct coverage report', async() => {
    await timeout(500)
    not(Global, undefined)
    not(Global.loader, undefined)
    const coverage_en = Global.loader.getCoverage('en')
    expect(coverage_en).to.matchSnapshot()
    const coverage_de = Global.loader.getCoverage('de')
    expect(coverage_de).to.matchSnapshot()
  })

  it('get keys', async() => {
    await openFile('src/App.svelte')
    await timeout(500)
    const keys = KeyDetector.getKeys(window.activeTextEditor!.document)
    expect(keys).to.matchSnapshot()
  })
})
