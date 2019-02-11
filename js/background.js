browser.tabs.onCreated.addListener(info => {
  browser.tabs.update(info.tabId, { pinned: true })
})

browser.browserAction.setTitle({
  title: 'Toggle this tab pinned status'
})

browser.browserAction.onClicked.addListener(info => {
  browser.tabs.update(info.tabId, { pinned: !info.pinned })
})

browser.commands.onCommand.addListener(async name => {
  if (name === 'close-tab') {
    let info = await browser.tabs.query({ active: true, currentWindow: true })
    browser.tabs.remove(info[0].id)
  }
})
