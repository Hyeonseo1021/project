class Level:
    def __init__(self, level, concept, skill):
        self.level = level
        self.concept = concept
        self.skill = skill

    def start(self):
        print(f"레벨 {self.level}: {self.concept}")
        print(self.skill)
        user_input = input("코드 입력: ")
        self.evaluate(user_input)

    def evaluate(self, user_input):
        try:
            exec(user_input)
            print("성공!")
        except Exception as e:
            print(f"에러: {e}")

class Game:
    def __init__(self) -> None:
        self.levels = {
            Level(1, "변수", "값이 100인 'health' 변수를 생성하세요."),
            Level(2, "If문", "'health'가 50 아래인지 확인하는 if문을 작성하세요.")
        }

    def start(self):
        print("코드왕국에 오신 걸 환영해요!")
        while self.current_level < len(self.levels):
            self.levels[self.current_level].start()
            self.current_level += 1
        print("축하합니다! 만렙에 도달하셨습니다.")

game = Game()
game.start()