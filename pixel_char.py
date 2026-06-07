#!/usr/bin/env python3
"""고해상도 전신 픽셀 캐릭터 - 삼성 라이온즈 유니폼 인물 (비율 보정판)."""
from PIL import Image, ImageDraw

W, H = 96, 178
SCALE = 6
img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(img)

# ---- 팔레트 ----
NAVY   = (28, 41, 74)
NAVY_D = (17, 26, 50)
NAVY_L = (46, 63, 104)
SKIN   = (240, 198, 145)
SKIN_S = (210, 162, 108)
SKIN_H = (250, 216, 172)
HAIR   = (32, 25, 18)
LENS   = (24, 24, 30)
LENS_H = (78, 80, 92)
BLUE   = (29, 84, 184)
BLUE_S = (19, 56, 130)
BLUE_H = (60, 120, 216)
WHITE  = (245, 247, 251)
WHT_S  = (206, 212, 222)
SHRT   = (236, 236, 238)
SHRT_S = (196, 198, 204)
SHRT_H = (250, 250, 252)
PHONE  = (208, 212, 218)
PHONE_E= (88, 94, 102)
PHONE_S= (150, 156, 164)
GREEN  = (0, 140, 69)
RED    = (206, 43, 55)
SHOE   = (242, 244, 248)
SHOE_S = (52, 54, 62)
CX = 48

def rrect(box, r, fill): d.rounded_rectangle(box, radius=r, fill=fill)
def ell(box, fill):      d.ellipse(box, fill=fill)
def poly(pts, fill):     d.polygon(pts, fill=fill)

# =========================================================
# 다리 + 신발
# =========================================================
for (x0, x1) in [(36, 47), (49, 60)]:
    rrect((x0, 122, x1, 162), 3, SKIN)
    d.rectangle((x1-2, 124, x1, 160), fill=SKIN_S)   # 종아리 바깥 음영
    d.rectangle((x0, 124, x0+1, 158), fill=SKIN_H)   # 안쪽 하이라이트
    ell((x0, 138, x1, 146), SKIN_H)                  # 무릎 하이라이트
    d.rectangle((x0, 144, x1, 146), fill=SKIN)
# 신발 (운동화 + 끈 + 밑창)
for (x0, x1, toe) in [(33, 49, 1), (47, 63, 1)]:
    rrect((x0, 158, x1, 169), 3, SHOE)
    d.rectangle((x0+toe, 167, x1, 172), fill=SHOE_S)      # 밑창
    rrect((x0+1, 168, x1, 172), 2, SHOE_S)
    d.line((x0+2, 162, x1-2, 162), fill=WHT_S)            # 갑피 라인
    for ly in (159, 161, 163):                            # 끈
        d.line((x0+5, ly, x1-5, ly), fill=WHT_S)
    ell((x0, 160, x0+6, 168), SHOE)                       # 발등

# =========================================================
# 반바지 (흰색, 통넓음)
# =========================================================
poly([(27, 100), (69, 100), (73, 130), (51, 127), (45, 127), (23, 130)], SHRT)
d.rectangle((45, 102, 51, 128), fill=SHRT_S)                 # 가운데 솔기
poly([(58, 101), (69, 100), (73, 130), (60, 128)], SHRT_S)   # 오른쪽 음영
poly([(27, 100), (34, 100), (29, 126), (24, 128)], SHRT_H)   # 왼쪽 하이라이트
d.line((28, 128, 44, 126), fill=WHT_S)                       # 밑단
d.line((52, 126, 72, 129), fill=WHT_S)
# 이탈리아 패치 (왼쪽 허벅지)
d.rectangle((30, 110, 33, 120), fill=GREEN)
d.rectangle((33, 110, 36, 120), fill=WHITE)
d.rectangle((36, 110, 39, 120), fill=RED)
d.rectangle((30, 110, 39, 111), fill=WHT_S)

# =========================================================
# 유니폼 상의 (헐렁한 핏)
# =========================================================
# 몸통
poly([(30, 50), (66, 50), (77, 72), (77, 100), (70, 108),
      (26, 108), (19, 100), (19, 72)], BLUE)
# 소매
rrect((13, 50, 33, 76), 6, BLUE)
rrect((63, 50, 83, 76), 6, BLUE)
d.rectangle((13, 71, 33, 76), fill=BLUE_S)
d.rectangle((63, 71, 83, 76), fill=BLUE_S)
d.line((14, 74, 32, 74), fill=WHITE)            # 소매 흰 라인
d.line((64, 74, 82, 74), fill=WHITE)
# 음영 (오른쪽/아래)
poly([(60, 52), (77, 72), (77, 100), (70, 108), (58, 108)], BLUE_S)
poly([(26, 102), (70, 108), (26, 108)], BLUE_S)
# 하이라이트 (왼쪽 어깨)
poly([(30, 52), (37, 52), (27, 78), (21, 74)], BLUE_H)
# 단추 플래킷
d.line((48, 56, 48, 104), fill=BLUE_S)
for by in range(60, 104, 9):
    d.point((48, by), fill=WHITE)
# V넥 칼라
poly([(39, 50), (57, 50), (48, 62)], WHITE)
poly([(42, 50), (54, 50), (48, 58)], BLUE_S)
# SAMSUNG 가슴 라인
d.rectangle((40, 55, 56, 56), fill=WHT_S)

# LIONS 워드마크 (팔보다 먼저 그려 가슴 위쪽에 배치)
FONT = {
 'L':["10000","10000","10000","10000","10000","11111"],
 'I':["111","010","010","010","010","111"],
 'O':["01110","10001","10001","10001","10001","01110"],
 'N':["10001","11001","10101","10011","10001","10001"],
 'S':["01111","10000","01110","00001","00001","11110"],
}
def draw_text(word, x, y, col, sc=2):
    cx = x
    for ch in word:
        pat = FONT[ch]; w = len(pat[0])
        for yy in range(6):
            for xx in range(w):
                if pat[yy][xx] == '1':
                    d.rectangle((cx+xx*sc, y+yy*sc, cx+xx*sc+sc-1, y+yy*sc+sc-1), fill=col)
        cx += (w + 1) * sc
draw_text("LIONS", 21, 64, WHITE, sc=2)

# 팔 (양옆으로 자연스럽게 내림)
# 왼팔 (아래팔)
poly([(16, 75), (28, 75), (26, 106), (15, 104)], SKIN)
d.rectangle((23, 78, 26, 104), fill=SKIN_S)      # 바깥 음영
d.rectangle((16, 78, 18, 102), fill=SKIN_H)      # 안쪽 하이라이트
# 왼손 (살짝 주먹 쥔 형태)
ell((14, 102, 28, 116), SKIN)
d.rectangle((14, 103, 28, 108), fill=SKIN)
d.arc((14, 100, 28, 112), 0, 180, fill=SKIN_S)   # 손등 라인
for fx in (17, 20, 23):                           # 손가락 구분
    d.line((fx, 110, fx, 115), fill=SKIN_S)
d.rectangle((25, 105, 27, 110), fill=SKIN_S)      # 엄지쪽 음영
# 오른팔
poly([(68, 75), (80, 75), (81, 104), (70, 106)], SKIN)
d.rectangle((70, 78, 73, 104), fill=SKIN_S)
d.rectangle((78, 78, 80, 102), fill=SKIN_H)
# 오른손
ell((68, 102, 82, 116), SKIN)
d.rectangle((68, 103, 82, 108), fill=SKIN)
d.arc((68, 100, 82, 112), 0, 180, fill=SKIN_S)
for fx in (73, 76, 79):
    d.line((fx, 110, fx, 115), fill=SKIN_S)
d.rectangle((69, 105, 71, 110), fill=SKIN_S)

# =========================================================
# 목
# =========================================================
d.rectangle((42, 44, 54, 54), fill=SKIN)
d.rectangle((42, 44, 54, 47), fill=SKIN_S)     # 턱 그림자
d.rectangle((51, 44, 54, 54), fill=SKIN_S)

# =========================================================
# 머리 / 얼굴
# =========================================================
ell((33, 16, 63, 48), SKIN)
poly([(56, 22), (63, 30), (60, 44), (52, 47)], SKIN_S)   # 우측 얼굴 음영
ell((30, 30, 36, 40), SKIN); ell((60, 30, 66, 40), SKIN) # 귀
d.point((33, 35), fill=SKIN_S); d.point((63, 35), fill=SKIN_S)
# 선글라스
rrect((34, 30, 47, 39), 3, LENS)
rrect((49, 30, 62, 39), 3, LENS)
d.rectangle((47, 32, 49, 34), fill=LENS)          # 브릿지
d.line((36, 32, 41, 32), fill=LENS_H)             # 렌즈 반사
d.line((51, 32, 56, 32), fill=LENS_H)
d.line((31, 33, 34, 33), fill=LENS)               # 안경 다리
d.line((62, 33, 65, 33), fill=LENS)
# 코 / 입
d.line((47, 40, 47, 43), fill=SKIN_S)
d.rectangle((43, 44, 53, 45), fill=SKIN_S)
d.line((45, 45, 51, 45), fill=(150, 92, 72))

# =========================================================
# 모자
# =========================================================
ell((31, 6, 65, 32), NAVY)                 # 크라운
d.rectangle((31, 18, 65, 27), fill=NAVY)
poly([(28, 26), (68, 26), (66, 31), (30, 31)], NAVY_D)   # 챙
ell((28, 26, 68, 35), NAVY_D)
d.pieslice((31, 6, 65, 32), 200, 260, fill=NAVY_L)       # 좌측 하이라이트
d.pieslice((31, 6, 65, 32), 295, 348, fill=NAVY_D)       # 우측 음영
d.rectangle((45, 11, 51, 16), fill=WHITE)                # 로고
d.point((44, 15), fill=WHITE); d.point((51, 15), fill=WHITE)
d.point((47, 10), fill=WHITE); d.point((49, 10), fill=WHITE)

# =========================================================
# 외곽선 자동 생성
# =========================================================
OUTLINE = (20, 22, 28, 255)
px = img.load()
opaque = [[px[x, y][3] > 0 for y in range(H)] for x in range(W)]
edges = []
for x in range(W):
    for y in range(H):
        if opaque[x][y]:
            continue
        for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
            nx, ny = x+dx, y+dy
            if 0 <= nx < W and 0 <= ny < H and opaque[nx][ny]:
                edges.append((x, y)); break
for (x, y) in edges:
    px[x, y] = OUTLINE

# =========================================================
# 출력
# =========================================================
big = img.resize((W*SCALE, H*SCALE), Image.NEAREST)
big.save("pixel-character.png")
bg = Image.new("RGBA", big.size, (246, 248, 251, 255))
bg.alpha_composite(big)
bg.convert("RGB").save("pixel-character-preview.png")
print(f"saved {W*SCALE}x{H*SCALE}")
