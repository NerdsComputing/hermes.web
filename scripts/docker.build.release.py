from os import system
from argparse import ArgumentParser

parser = ArgumentParser()

parser.add_argument('--tag',
                    default='nerdscomputing/hermes.web:latest',
                    help='The tag for the new created docker image.')

parser.add_argument('--shortVersion',
                    default='2021.0.0',
                    help='The short semantic version of the web.')

parser.add_argument('--longVersion',
                    default='2021.0.0.Branch.Sha',
                    help='The long semantic version of the web.')

args = parser.parse_args()

system(f'docker build -t {args.tag} -f dockerfile.release --build-arg SHORT_VERSION={args.shortVersion} LONG_VERSION={args.longVersion} .')
