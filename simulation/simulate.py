import random
import math

streamers = []
usernames = []

with open('./names.txt') as f:
    streamers = f.read().split('\n')
with open('./usernames.txt') as f:
    usernames = f.read().split('\n')

streamers = streamers[:len(streamers) - 1]
usernames = usernames[:len(usernames) - 1]

class Streamer:
    def __init__(self, name):
        self.points = []
        self.name = name
        self.generateTest()
        self.historicPrices = []

    def adjustPrice(self, i):
        self.price += (self.baseline(i) - self.price) * 0.2
        if self.price < 0:
            self.price = 1

    def storePrice(self):
        self.historicPrices.append(self.price)

    def baseline(self, i):
        subs = self.subs[i]
        j = i - 14 
        if i < 14:
            j = 0
        average = subs * 24 * 60
        if i > 0:
            average = sum(self.points[j:i + 1]) / (i - j)
        return (subs * 24 * 60 + average) / (24 * 6) + 10

    def generateTest(self):
        streamDays = [random.randint(0, 1) for _ in range(7)]
        self.streamDays = streamDays
        subs = random.randint(1, 100)
        self.subs = [subs]
        if random.random() < 0.03:
            subs *= 100
        self.price = math.floor(3 * subs * math.log(subs))
        explosion = False
        for i in range(30):
            if random.random() < 0.0001:
                subs = random.randint(0, 100)
            if subs < 500 and random.random() < 0.0001:
                subs += random.randint(10000, 20000)
            if streamDays[i % 7]:
                subs *= 0.99 + random.random() * 0.03
                self.points.append(int(subs * (random.random() * 3 + 4) * (0.8 + 0.4 * random.random()) * 0.3) * 24 * 60)
            else:
                self.points.append(0)
            self.subs.append(subs)

class User:
    def __init__(self, name):
        self.wins = 0
        self.savvy = random.random() < 0.5
        self.bank = 10000
        self.username = name

    def selectPlayers(self, objects, t):
        self.team = [False] * len(objects)
        self.buyPrices = [0] * len(objects)
        order = [i for i in range(len(self.team))]
        random.shuffle(order)

        count = 0
        for i in order:
            if self.team[i] and random.random() < (self.buyPrices[i] - o.price) / self.buyPrices[i]:
                self.team[i] = False
                self.bank += o.price
                count += 1
                if count > 5:
                    break

        count = 0
        for i in order:
            if self.bank == 0:
                return
            o = objects[i]
            if not self.team[i] and o.price < self.bank and random.random() < (self.bank + o.baseline(t) - 2 * o.price) / self.bank:
                self.bank -= o.price
                self.buyPrices[i] = o.price
                self.team[i] = True
                picks[i] = True
                o.price *= 1.05
                count += 1
                if count > 5:
                    break

    def selectTeam(self, objects, t):
        self.roundTeam = []
        if self.savvy:
            for i in range(len(objects)):
                o = objects[i]
                if self.team[i] and o.streamDays[t % 7]:
                    self.roundTeam.append(objects[i])
        else:
            for i in range(len(objects)):
                if self.team[i]:
                    self.roundTeam.append(objects[i])
        if len(self.roundTeam) > 5:
            self.roundTeam = self.roundTeam[:5]

    def teamValue(self):
        return sum(list(map(lambda x: x.price, self.roundTeam)))

    def teamScore(self, i):
        return sum(list(map(lambda x: x.points[i], self.roundTeam)))

objects = []
for name in streamers:
    k = Streamer(name)
    objects.append(k)
objects.sort(key = lambda k: k.price, reverse=True)

users = []

picks = [False] * 1000
for name in usernames:
    u = User(name)
    users.append(u)

'''
for i in range(1000):
    for j in range(30):
        print(objects[i].baseline(j))
'''
# print(objects[0].baseline(89))

games = []

for i in range(30):
    random.shuffle(users)
    for u in users:
        u.selectPlayers(objects, i)
        u.selectTeam(objects, i)
    users.sort(key=lambda k: k.teamValue())
    for j in range(0, len(users), 2):
        u1, u2 = users[j], users[j + 1]
        v1 = u1.teamValue() / 10
        u1.bank -= v1
        v2 = u2.teamValue() / 10
        u2.bank -= v2

        if u1.teamScore(i) > u2.teamScore(i):
            u1.bank += v1 + v2
            u1.wins += 1
            games.append((u1.username, u2.username))
        else:
            u2.bank += v1 + v2
            u2.wins += 1
            games.append((u2.username, u1.username))
        u1.bank += u1.teamScore(i)
        u2.bank += u2.teamScore(i)

    for o in objects:
        o.adjustPrice(i)
        o.storePrice()

import json

u = []
g = []
k = {}
vm = {}
followers = {}
for o in objects:
    k[o.name] = o.historicPrices
    vm[o.name] = o.points
    followers[o.name] = o.subs
for user in users:
    u.append((user.bank, user.wins))

print(json.dumps({'twitch': k, 'users': u, 'games': g, 'vm': vm, 'followers': followers}))

'''
for i in range(1000):
    print(objects[random.randint(0, 999)].baseline(random.randint(10, 80)), objects[random.randint(0, 999)].historicPrices[random.randint(10, 80)])
    '''

