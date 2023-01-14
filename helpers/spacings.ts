
export const mapSpacingToTheme = (spacings?: string, isMobile?: boolean) : number => {
    if(!spacings) return 0
    const themeSpacing: [key: any, key2: any] = spacings.split(',') as any
    const spacing =  isMobile ? themeSpacing[1] : themeSpacing[0]
    return spacing ?? 0
}