#!/usr/bin/env python3
"""삼성 라이온즈 유니폼을 입은 인물 픽셀 캐릭터 생성기."""
from PIL import Image

# 색상 팔레트
PAL = {
    '.': None,                  # 투명
    'N': (27, 42, 74),          # 모자 네이비
    'n': (15, 24, 48),          # 모자 챙/그림자
    'W': (245, 246, 250),       # 흰색
    'S': (240, 196, 138),       # 피부
    's': (214, 162, 102),       # 피부 그림자
    'H': (33, 26, 20),          # 머리카락
    'K': (24, 24, 28),          # 선글라스
    'B': (29, 80, 179),         # 유니폼 파랑
    'b': (20, 55, 130),         # 유니폼 진한 파랑
    'P': (205, 210, 216),       # 휴대폰
    'p': (120, 126, 134),       # 휴대폰 테두리
    'L': (234, 234, 234),       # 반바지 흰색
    'l': (203, 203, 203),       # 반바지 그림자
    'G': (0, 140, 69),          # 이탈리아 초록
    'R': (206, 43, 55),         # 이탈리아 빨강
    'D': (60, 60, 60),          # 신발/어두운
}

GRID = [
    "................................",
    "................................",
    "..........NNNNNNNNNNNN..........",
    ".........NNNNNNNNNNNNNN.........",
    "........NNNNNWWNNNNNNNNN........",
    "........NNNNWWWWNNNNNNNN........",
    "........NNNNNNNNNNNNNNNN........",
    ".....nnnnnnnnnnnnnnnnnnnnnn.....",
    ".....nnnnnnnnnnnnnnnnnnnnnn.....",
    "...........SSSSSSSSSS...........",
    "..........SSSSSSSSSSSS..........",
    "..........KKKKKKKKKKKK..........",
    "..........KKKKKKKKKKKK..........",
    "..........SSSSSSSSSSSS..........",
    "...........SSSSSSSSSS...........",
    "...........SsSSSSSSsS...........",
    "............SSSSSSSS............",
    ".............SSSSSS.............",
    ".............SSSSSS.............",
    ".......BBBBBBBBBBBBBBBBBB.......",
    "......BBBBBBBBBBBBBBBBBBBB......",
    ".....BBBBBBBBBWWWWBBBBBBBBB.....",
    "....BBBBBBBBBBWWWWBBBBBBBBBB....",
    "....BBBBBBBBBBBBBBBBBBBBBBBB....",
    "....BB@@@@@@@@@@@@@@@@@@@BB.....",
    "....BB@@@@@@@@@@@@@@@@@@@BB.....",
    "....BB@@@@@@@@@@@@@@@@@@@BB.....",
    "....BBBBBBBBBBBBBBBBBBBBBBBB....",
    "....BBBBBBBBSSSSSSSSBBBBBBBB....",
    "....BBBBBBBSPPPPPPPPSBBBBBBB....",
    "....BBBBBBBSPpppppppPSBBBBBB....",
    "....BBBBBBBSSSSSSSSSSBBBBBBB....",
    ".....BBBBBBBBBBBBBBBBBBBBBB.....",
    "......BBBBBBBBBBBBBBBBBBBB......",
    ".......BBBBBBBBBBBBBBBBBB.......",
    "........LLLLLLLLLLLLLLLL........",
    "........LLLLLLLLLLLLLLLL........",
    "........LLGRLLLLLLLLLLLL........",
    "........LLlLLLLLLLLLLlLL........",
    "........LLLLLLLL.LLLLLLL........",
    "........SSSSSSS...SSSSSSS.......",
    "........SSSSSSS...SSSSSSS.......",
    "........SSSSSSS...SSSSSSS.......",
    ".......DDDDDDD....DDDDDDDD......",
]

# '@' 영역(유니폼 가슴)에 흰색 "LIONS" 글자 오버레이 (3x3 미니폰트)
FONT3 = {
    'L': ["100", "100", "111"],
    'I': ["111", "010", "111"],
    'O': ["111", "101", "111"],
    'N': ["101", "111", "101"],
    'S': ["111", "010", "111"],
}
def stamp_letters():
    band_rows = [i for i, r in enumerate(GRID) if '@' in r]
    top = band_rows[0]
    # '@' -> 'B'(파랑 배경)로 치환
    for i in band_rows:
        GRID[i] = GRID[i].replace('@', 'B')
    grid = [list(r) for r in GRID]
    starts = [6, 10, 14, 18, 22]  # 각 글자 시작 열
    for ch, sx in zip("LIONS", starts):
        pat = FONT3[ch]
        for dy in range(3):
            for dx in range(3):
                if pat[dy][dx] == '1':
                    grid[top + dy][sx + dx] = 'W'
    for i in range(len(GRID)):
        GRID[i] = "".join(grid[i])
stamp_letters()

CELL = 14  # 픽셀당 크기

W = len(GRID[0]) * CELL
H = len(GRID) * CELL
img = Image.new("RGBA", (W, H), (255, 255, 255, 0))
px = img.load()

for y, row in enumerate(GRID):
    for x, ch in enumerate(row):
        color = PAL.get(ch)
        if color is None:
            continue
        for dy in range(CELL):
            for dx in range(CELL):
                px[x * CELL + dx, y * CELL + dy] = color + (255,)

img.save("pixel-character.png")
# 미리보기용 흰 배경 버전
bg = Image.new("RGBA", (W, H), (247, 249, 252, 255))
bg.alpha_composite(img)
bg.convert("RGB").save("pixel-character-preview.png")
print(f"saved {W}x{H}")
