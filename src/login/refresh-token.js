const refreshToken = async(handle, refreshTiming) => {
  const newAuthRes = await handle.reloadAuthResponse()
  refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000
  setTimeout(refreshToken, refreshTiming)
}

export const refreshedtoken = handle => {
  const refreshTiming = (handle.tokenObj.expires_in || 3600 - 5 * 60) * 1000
  refreshToken(handle, refreshTiming)
  setTimeout(refreshToken, refreshTiming)
}
